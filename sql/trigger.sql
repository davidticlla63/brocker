CREATE FUNCTION concluir_poliza() RETURNS trigger AS $concluir_poliza$
    BEGIN       
		update poliza set estado='CON' WHERE polizaid=new.polizaid and tipoemision<>'Anexo Conclusion';
		update poliza set estado='CON' WHERE id=new.polizaid;
        RETURN NEW;
    END;
$concluir_poliza$ LANGUAGE plpgsql;


CREATE TRIGGER tr_concluir_poliza
  BEFORE INSERT
  ON poliza
  FOR EACH ROW
  EXECUTE PROCEDURE concluir_poliza();




create or replace  function pa_produccio_comision_general(pid character varying,pfechainicio int,pfechafin int) 
			returns  table (tiporamo character varying,tipo character varying,ciaspvs character varying,nombrecompania character varying,nombreramo character varying,ramo character varying, comisionusd decimal)
			language sql
			as $body$
			
			with consulta as(
			      select  tr.spvs ||' ||    '||tr.nombre tiporamo,tr.nombre tipo,p.ciaspvs,cs.nombre nombrecompania,
      case when p.ciaspvs is null then  r.nombre else p.ciaspvs ||' ||    '|| r.nombre end  nombreramo,r.nombre ramo, 
      case when p.ingresoegreso ='I' then sum(p.comisionusd) else 0 end comisionusdingreso,case when p.ingresoegreso ='E' then sum(p.comisionusd) else 0 end comisionusdegreso,
      (case when p.ingresoegreso ='I' then sum(p.comisionusd) else 0 end -case when p.ingresoegreso ='E' then sum(p.comisionusd) else 0 end ) comisionusd
            from memo m
			inner join poliza p  on p.id=m.polizaid
            inner join sucursal s on s.id=p.sucursalid 
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid
            inner join tipo_ramo tr  on tr.id =r.tiporamoid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            where to_char(m.fechamemo, 'YYYYMMDD')::integer>=   pfechainicio  and to_char(m.fechamemo, 'YYYYMMDD')::integer<=pfechafin  and m.estado='ACT' 
			and s.empresaid= pid
			group by tr.spvs ,tr.nombre ,p.ciaspvs ,cs.nombre ,r.nombre , p.ingresoegreso
			)
				
			 select tiporamo,tipo,ciaspvs,nombrecompania,nombreramo,ramo,sum(comisionusdingreso)-sum(comisionusdegreso) comisionusd from consulta
			group by tiporamo,tipo,ciaspvs,nombrecompania,nombreramo,ramo
			order by tipo,nombrecompania,ramo desc;
		
			$body$;
			
			--select * from pa_produccio_comision_general('fd2169be-1d80-4416-a009-a07658f1678e',20220101,20220412)
			
			
			create or replace  function pa_produccio_primaneta_general(pid character varying,pfechainicio int,pfechafin int) 
			returns  table (tiporamo character varying,tipo character varying,ciaspvs character varying,nombrecompania character varying,nombreramo character varying,ramo character varying, primaneta decimal)
			language sql
			as $body$
			
			with consulta as(
      select  tr.spvs ||' ||    '||tr.nombre tiporamo,tr.nombre tipo,p.ciaspvs,cs.nombre nombrecompania,
      case when p.ciaspvs is null then  r.nombre else p.ciaspvs ||' ||    '|| r.nombre end  nombreramo,r.nombre ramo, 
      case when p.ingresoegreso ='I' then sum(p.primaneta) else 0 end primanetaingreso,case when p.ingresoegreso ='E' then sum(p.primaneta) else 0 end primanetaegreso,
      (case when p.ingresoegreso ='I' then sum(p.primaneta) else 0 end -case when p.ingresoegreso ='E' then sum(p.primaneta) else 0 end ) primaneta
            from memo m
			inner join poliza p  on p.id=m.polizaid
            inner join sucursal s on s.id=p.sucursalid 
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid
            inner join tipo_ramo tr  on tr.id =r.tiporamoid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            where to_char(m.fechamemo, 'YYYYMMDD')::integer>=   pfechainicio  and to_char(m.fechamemo, 'YYYYMMDD')::integer<= pfechafin  and m.estado='ACT' 
			and s.empresaid= pid 
			group by tr.spvs ,tr.nombre ,p.ciaspvs ,cs.nombre ,r.nombre , p.ingresoegreso
			)
			
			select tiporamo,tipo,ciaspvs,nombrecompania,nombreramo,ramo,sum(primanetaingreso)-sum(primanetaegreso) primaneta from consulta
			group by tiporamo,tipo,ciaspvs,nombrecompania,nombreramo,ramo
			order by tipo,nombrecompania,ramo desc
		
			$body$;

      create or replace  function pa_produccio_primaneta_general_ingreso_egreso(pid character varying,pfechainicio int,pfechafin int,pingresoegreso  character varying) 
			returns  table (tiporamo character varying,tipo character varying,ciaspvs character varying,nombrecompania character varying,nombreramo character varying,ramo character varying, primaneta decimal)
			language sql
			as $body$
			
			
			
			select  tr.spvs ||' ||    '||tr.nombre tiporamo,tr.nombre tipo,p.ciaspvs,cs.nombre nombrecompania,
      case when p.ciaspvs is null then  r.nombre else p.ciaspvs ||' ||    '|| r.nombre end  nombreramo,r.nombre ramo, p.primaneta
            from memo m
			inner join poliza p  on p.id=m.polizaid
            inner join sucursal s on s.id=p.sucursalid 
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid
            inner join tipo_ramo tr  on tr.id =r.tiporamoid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            where  to_char(m.fechamemo, 'YYYYMMDD')::integer>=   pfechainicio  and to_char(m.fechamemo, 'YYYYMMDD')::integer<= pfechafin  and m.estado='ACT' 
			and s.empresaid= pid  AND p.ingresoegreso=pingresoegreso

			order by tr.nombre, r.nombre,cs.nombre desc
		
			$body$;


